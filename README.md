# [WIP] Webpack Deep Scope Analysis Plugin

**Work in progress!** A webpack plugin for deep scope analysis.
It's a project of [GSoC 2018](https://summerofcode.withgoogle.com/organizations/4657420148670464/#projects) webpack organization.

Student: [@Vincent](https://github.com/vincentdchan)   Mentor: [@Tobias](https://github.com/sokra)

# Progress

- [x] Use [escope](https://github.com/estools/escope) to analyse the scopes of code
- [ ] Use scopes information to generate the information about the import and export variables.
- [ ] Use the informations to do tree shaking for webpack

# About Escope

Now the `src/` includes a Typescript version of [escope](https://github.com/estools/escope),
because the plugin needs some internal changes of the escope manager. So I didn't import the 
escope directly. 

When the plugin is nearly finished, I will make some PRs to the original escope repo.
