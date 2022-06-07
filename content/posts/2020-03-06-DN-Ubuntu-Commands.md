---
 
title: 'Daily Notes: Ubuntu Commands'
tags: Daily Notes
---

# Ubuntu Commands

- ### uninstall a package and remove its dependencies completely
  ```bash
  $ sudo apt-get purge --auto-remove packagename
  ```
- ### check out the packages installed
  ```bash
  $ dpkg --list
  ```
- ### switch user
  ```bash
  $ su username
  ```
- ### search file
  ```bash
  $ locate file_name
  ```
- ### list all files including hidden ones
  ```bash
  $ ls <file_dir> -la
  ```
- ### check system timezone
  ```bash
  $ cat /etc/timezone
  Europe/Moscow
  ```
