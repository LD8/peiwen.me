---
title: Git Workflow
tags: Git
summary: When working within a team, it is essential to know some functions of git which you probably wouldn't use when working by yourself. The workflows are a bit different.
---

# Git Workflow

When working within a team, it is essential to know some functions of git which you probably wouldn't use when working by yourself. The workflows are a bit different.

## git clone `<address>`

To clone a repo which you wish to work on. Copy the address which indicates the specific branch. If you wish to clone a specific branch:

```bash
git clone -b `<branch_name>` `<repo_address>`
```

## git pull

When others have made some changes and you wish to work locally in sync, run `git pull`

## git checkout `<branch_name>`

You can switch to a branch by running the above command. When you just cloned a repo from master for example, you'd like to work on new features, run the following command to create a new branch:

```bash
git checkout -b <new_branch_name>
```

This is the equivalent of:

```bash
git branch <new_branch_name>
git checkout <new_branch_name>
```

Now you have a brand new branch to work on.

## git checkout master

When you wish to switch back to the master branch, you can run the above command of course **_after_** you have committed the changes you have made on the `<new_branch>`:

```bash
git add . && git commit -m 'a comment to describe the changes'
```

## git pull AGAIN

During the time you made the change, could be a few hours, could be a couple of days, there might be some changes happened to the branch you cloned/pulled from, give it the `dev branch` or whatnot. So it is ESSENTIAL that you `git pull origin dev` to retrieve the latest changes as well as resolving possible conflict you may have.

## git merge

When you are done with your new feature on your `<new_branch>`, you can run the following command to merge the `<new_branch>` into the master branch:

```bash
git checkout master
git merge <new_branch>
```

## git branch -d `<new_branch>`

When you have merged a branch, you can run the above command to delete the branch, for no need to keep it. It is the same branch as the master branch.

## git mergetool

Use `mergetool` to resolve the conflict encountered when merging with a non-direct parent header(copy/version).

## git push `<remote_server>` `<local_branch>`: `<remote_branch>`

Push request is a normal practice when you wish to merge after code review:

```bash
git push origin <new_branch>：<remote_branch>
```

### Refs

- [Git 分支的新建与合并](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6)
- [Git push 常见用法](https://www.cnblogs.com/qianqiannian/p/6008140.html)
