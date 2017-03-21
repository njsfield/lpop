## LPOP

A command line tool to return a random string (name) from an array.

## Install

1. Clone the repo to your local machine.
2. cd into the repo directory.
3. Run `npm link`.
4. Run `lpop` to generate random string.

## How?

In *data.json*, an object stores the following;
- A *students* key containing an array of string names.
- An *index* key containing an integer between 0 - (student array length - 1)

Every time the command `lpop` is run, *data.json* is read and stored in a *data* variable, and the index value is used to retrieve the associated name in the array, which is then outputted to the console. 

The index value in *data* is increased by 1, and finally a stringified copy of *data* is written to *data.json*, replacing the previous content.

If the index value in *data.json* reaches (student array length), then the index value is set to 0, and the array is shuffled, before the application continues. This ensures that when a name is selected randomly, it won't be selected again for at least (student array length) times.


