module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'post-checkout': 'yarn build:apis',
    'post-merge': 'yarn build:apis',
  },
}
