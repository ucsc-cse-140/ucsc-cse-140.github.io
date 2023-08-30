---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
---

{{< fetch-result tournament="1" >}}