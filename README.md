# gitignore-boilerplate

## What am I?

My personal git repository template containing my preferred:

- license
- gitignore boilerplate
- branches


## How am I used?

This is a versioned git repository base template that I can:

- Improve over time
- Set as a GitHub repository template from which to create new repositories
- Manually copy updated versions into existing project repos as needed


## Appendix

### Why not a package dependency?

The ```LICENSE``` and ```README.md``` files are the minimum files required for an open source project git repository.

I also like a specific branch structure of:

```
dev(s) -> int -> main
```

which allows me to develop in multiple dev branches, merge into ```int``` as the trusted integration branch, and once ready for production, do a simple fast-forward into ```main``` as the trusted production branch. 

Thus, it is desirable to have a template git repository containing these two files and these three branches.

Further, none of the above basic repo requirements are runtime code nor functional.

Therefore, a package dependency, which contains runtime or functional dependencies, and which is a build artifact *of* a repository and by design does not leak any structure of the producer repository, would not be the correct way to manage this repository template.

This is not without one major downside: any updates to the license, readme, or branch names that I want to universally apply, would have to be manually applied to all repos.

Unfortunately, that’s just how it is.
