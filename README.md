# Easy Conditionals
Simple functions to build more readable conditionals.

~~~js
when(no(credentials)).then(() => { logout(user) })

when(not(open)).then(() => { openSomething() })

unless(x < 1).then(() => { x-- })

if (not(false)) {
  // do something
}
~~~
