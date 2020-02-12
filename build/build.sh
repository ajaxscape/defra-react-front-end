if [ -d static ]; then
  rm -r static
fi

cp -r ./node_modules/govuk-frontend/govuk/assets ./static

