# parsegraph-date

This module contains several utility methods for
manipulating dates. It uses the builtin Date object as its
primitive, so methods like nextDay, nextWeek, and previousDay
will return new Date objects.

    import { outputDate } from "parsegraph-date";

    console.log(outputDate(new Date(), true, true, true));
    // 'Today, Saturday, February 26, 2022 at 3:55 PM'
