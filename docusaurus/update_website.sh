
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
WEBSITE_SPEC_SUB_FOLDER=$BASE_PATH/website/public/specs
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
mkdir -p docs/{"$SSF_SPEC_SLUG/ssf-001","$SSF_SPEC_SLUG/ssf-002","$CASHPACK_SPEC_SLUG"}

echo "Copying specs..."
cp -r "$CASHPACK_SPEC_FOLDER/"* docs/"$CASHPACK_SPEC_SLUG"/
cp -r "$SSF_SPEC_FOLDER/ssf-001/spec"/* docs/"$SSF_SPEC_SLUG"/ssf-001/
cp -r "$SSF_SPEC_FOLDER/ssf-002/spec"/* docs/"$SSF_SPEC_SLUG"/ssf-002/
cp -r "$SSF_SPEC_FOLDER/_category_.json" docs/"$SSF_SPEC_SLUG"/

echo "Running build..."
if ! npm run build; then
  echo "Build failed. Exiting."
  exit 1
fi

echo "Build successful."
exit 1
# Commit changes in working branch
echo "Committing working changes..."
git add .
git commit -m "chore: update specs and rebuild" || true

# Switch to public branch
echo "Switching to public branch..."
git checkout "$PUBLIC_BRANCH"

#Commit the local changes to avoid merging conflicts
cd "$BASE_PATH/website"
git add .
git commit -m "Safeguarding localchaninges before commit" || true
cd "$WORKING_DIR" 

#Merge the changes from the WORKING_BRANCH
echo "Switching to public branch..."
git merge "$WORKING_BRANCH"

echo "Cleaning website spec subfolder..."
rm -rf "$WEBSITE_SPEC_SUB_FOLDER"/*
mkdir -p "$WEBSITE_SPEC_SUB_FOLDER"

echo "Copying build output..."
cp -r "$WORKING_DIR/build/"* "$WEBSITE_SPEC_SUB_FOLDER/"

echo "Pushing..."
git push origin "$PUBLIC_BRANCH"

echo "Deploying with wrangler..."
wrangler deploy

echo "Committing the published website"
git add .
git commit -m "Post deploy commit" || true

echo "Switching to back to WORKING_BRANCH ..."
git checkout "$WORKING_BRANCH"

echo "Done."