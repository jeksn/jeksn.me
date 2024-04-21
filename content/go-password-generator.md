---
title: Go Password Generator
description: Code for password generator in Golang
layout: article
---

# {{ title }}

This program generates a random password of length 10 by selecting random characters from a set of allowed characters. The `randomChar` function selects a random character from the set and returns it as a `rune`. The `main` function uses `randomChar` to generate 10 random characters and concatenates them into a string, which it then prints to the console.

```diff
package main

import (

  "fmt"

  "math/rand"

)

const passwordLength = 15

func randomChar() rune {

  chars := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%-_+#*?!@&;:="

  return rune(chars[rand.Intn(len(chars))])

}

func main(){

  var password string 

  for i := 0; i < passwordLength; i++ {

    password += string(randomChar())

  }

  fmt.Println(password)

}
```
