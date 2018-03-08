read -p "Are you sure? [Yy/Nn] : " -n 1 -r
echo    # (optional) move to a new line

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo
    echo '💔  Goodbye my love  💔'
    echo

    [[ "$0" = "$BASH_SOURCE" ]] && exit 1 || return 1 # handle exits from shell or function but don't exit interactive shell
fi

echo
echo '🏗  Starting deploy to gh-pages  🏗'
echo

./node_modules/gh-pages/bin/gh-pages -d dist

