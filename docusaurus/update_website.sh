
#!/usr/bin/env bash

set -e  # stop on error

# ---- CONFIG ----
BASE_PATH=/home/blackshark/data/fabric-payment-standards
#Cash-pack
CASHPACK_SPEC_FOLDER=$BASE_PATH/specs/cashpack-spec/spec
#Satblecoi Stack
SS_SPEC_FOLDER=$BASE_PATH/specs/ss-spec
#Disposable-keys
MPC_SPEC_FOLDER=$BASE_PATH/specs/disposable-keys-spec/spec
#Canonical Payment
CANONICAL_PAYMENT_FOLDER=$BASE_PATH/specs/canonical-payment-spec/spec
#
WORKING_DIR=$BASE_PATH/website/docusaurus
PUBLIC_BRANCH="public"
WORKING_BRANCH="working-dir"
#
WEBSITE_SPEC_SUB_FOLDER=$BASE_PATH/website/public/specs
CASHPACK_SPEC_SLUG=cashpack
SS_SPEC_SLUG=stablecoin-stack
MPC_SPEC_SLUG=disposable-keys
CANONICAL_PAYMENT_SLUG=canonical-payment

 

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
mkdir -p docs/{"$SS_SPEC_SLUG/ss-001","$SS_SPEC_SLUG/ss-002","$CASHPACK_SPEC_SLUG","$MPC_SPEC_SLUG","$CANONICAL_PAYMENT_SLUG"}

echo "Copying specs..."
#Cash-pack
cp -r "$CASHPACK_SPEC_FOLDER/"* docs/"$CASHPACK_SPEC_SLUG"/
cp -r "$CASHPACK_SPEC_FOLDER/_category_.json" docs/"$CASHPACK_SPEC_SLUG"/

#Satblecoi Stack
cp -r "$SS_SPEC_FOLDER/ss-001/spec"/* docs/"$SS_SPEC_SLUG"/ss-001/
cp -r "$SS_SPEC_FOLDER/ss-002/spec"/* docs/"$SS_SPEC_SLUG"/ss-002/
cp -r "$SS_SPEC_FOLDER/_category_.json" docs/"$SS_SPEC_SLUG"/

#Disposable-keys
cp -r "$MPC_SPEC_FOLDER/"* docs/"$MPC_SPEC_SLUG"/
cp -r "$MPC_SPEC_FOLDER/_category_.json" docs/"$MPC_SPEC_SLUG"/

#Canonical Payment
cp -r "$CANONICAL_PAYMENT_FOLDER/"* docs/"$CANONICAL_PAYMENT_SLUG"/
cp -r "$CANONICAL_PAYMENT_FOLDER/_category_.json" docs/"$CANONICAL_PAYMENT_SLUG"/
#

#exit 1;

echo "Running build..."
if ! npm run build ; then
  echo "Build failed. Exiting."
  exit 1
fi

echo "Build successful."

#exit 1

# Commit changes in working branch
echo "Committing working changes..."
git add -A
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