# QUL

### WHAT I WANT THIS TO BE

So.. I started this with lofty goals, and I've gotten **completely, wildly lost in the woods**.

So let's make a hypthetical, and maybe that'll help me refocus (given this _probably backend service_ typedef):

```
type Child {
  id: ID!
  name: string!
  iscool: boolean
}

type User {
  id: ID!
  name: string!
  child: Child
}

type QueryParams {
  sortBy: string
  id: ID[]
  page: Int
  weight: Int
}
```

**what if that was enough?**
What if, theoretically, that was descriptive enough of a system where the frontend was able to use any of the following queries, because the system trusts you to manage the resolvers like a sane human?

```
query FindChildName {
  QueryChild(QueryParams) {
    name
  }
}
query DoesTheUserHaveACoolKid {
  QueryUser(QueryParams) {
    child {
      iscool
    }
  }
}
mutation MutateChild(Child) {
  Child | ID | Error
}
mutation MutateUser(User) {
  User | ID | Error
}
```

> another thing is this, it's tedius to pass those params from query to inner query, and if you're not straight-piping them, it's going to get confusing _real fast_, so let's make those default passthroughs.

what if, also, you could use the query/mutation return type to specify how you'd like the store updated?

Say `mutation RenameChild { MutateChild(id: $id, name: $name) { id } }`
meant that you're uninterested in updating the store with the result, since you're only asking for a child `id` back, instead of
`mutation RenameChild{ MutateChild(id: $id, name: $name) { Child } }`
which would pass the full child object back **and also, you could do this:**
`mutation RenameChild{ MutateChild(id: $id, name: $name) { id, name } }`
to update the store, but not replace the full record, just that specific property of that specific child.

---

Ok yes, these are good goals to work toward. Let's get a todo.
maybe it's reaching? Maybe I'll hit some stumbling blocks in the autoparsing/autocreation of nested properties? I probably will, but after spending _another_ day reading about this crap, and still not learning as much as I'd like; I may as well strike out and start trying insane things.

### TODO:

0.  parse a schema, and give it to the graphql client in a format it accepts
1.  add to the schema a broad query based on a wrapping of the `graphql` schema parse lib util
1.  generate a mutation based on a wrapping of the `graphql` schema parse lib util
