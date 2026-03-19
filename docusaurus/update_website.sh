
#!/usr/bin/env bash

set -e  # stop on error

# ---- CONFIG ----
BASE_PATH=/home/blackshark/data/fabric-payment-standards
CASHPACK_SPEC_FOLDER=$BASE_PATH/cashpack-spec/spec
SSF_SPEC_FOLDER=$BASE_PATH/ssf-spec/
#
WORKING_DIR=$BASE_PATH/website/docusaurus
PUBLIC_BRANCH="public"
WORKING_BRANCH="working-dir"
#
WEBSITE_SPEC_SUB_FOLDER=$BASE_PATH/website/public
CASHPACK_SPEC_SLUG=cashpack
SSF_SPEC_SLUG=ssf


# ---- START ----
echo "Entering working dir..."
cd "$WORKING_DIR"

# Switch to public branch
echo "Switching to WORKING branch..."
git checkout "$WORKING_BRANCH"

echo "Cleaning build folder..."
rm -rf build

echo "Cleaning docs folder..."
rm -rf docs/*
mkdir -p docs/{"$CASHPACK_SPEC_SLUG","$SSF_SPEC_SLUG"}

echo "Copying specs..."
cp -r "$CASHPACK_SPEC_FOLDER/"* docs/"$CASHPACK_SPEC_SLUG"/
cp -r "$SSF_SPEC_FOLDER/ssf-"* docs/"$SSF_SPEC_SLUG"/

echo "Running build..."
if ! npm run build; then
  echo "Build failed. Exiting."
  exit 1
fi

echo "Build successful."

# Commit changes in working branch
echo "Committing working changes..."
git add .
git commit -m "chore: update specs and rebuild" || true

# Switch to public branch
echo "Switching to public branch..."
git checkout "$PUBLIC_BRANCH"

echo "Cleaning website spec subfolder..."
rm -rf "$WEBSITE_SPEC_SUB_FOLDER"/*
mkdir -p "$WEBSITE_SPEC_SUB_FOLDER"

echo "Copying build output..."
cp -r "$WORKING_DIR/build/"* "$WEBSITE_SPEC_SUB_FOLDER/"

echo "Committing public changes..."
git add .
git commit -m "chore: deploy updated build" || true

echo "Pushing..."
git push origin "$PUBLIC_BRANCH"

echo "Deploying with wrangler..."
wrangler deploy

echo "Done."