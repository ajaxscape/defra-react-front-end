if [ -d public/govuk ]; then
  rm -r public/govuk
fi

cp -r ./node_modules/govuk-frontend/govuk/assets ./public/govuk
