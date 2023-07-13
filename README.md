Reproduction for issue https://github.com/unjs/nitro/issues/783

To see bug start server and make request:

```
curl -X GET -H 'X-Foo: bar' http://localhost:3000/api/foo
```

Output in nuxt console:

```
Headers:                                                                                                                                                                    11:10:29 AM
{}                                                                                                                                                                          11:10:29 AM
Headers:                                                                                                                                                                    11:10:29 AM
{}
```
