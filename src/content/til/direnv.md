---
author: udit
pubDatetime: 2022-09-23T15:22:00Z
title: direnv
description: pwd based env vars
---

[direnv](https://direnv.net/) enables / disables environment variables dynamically based on the `pwd`

This was particularly useful when I had to set a new github account for some private repos. I could just set the `GIT_SSH_COMMAND` env variable to use the ssh-keys associated with the new account.
