// works
nav.addEventListener('click', toggleNav, false);

// will invoke the function immediately
nav.addEventListener('click', toggleNav(arg1, arg2), false);
nav.addEventListener('click', toggleNav.bind(scope, arg1, arg2), false);
