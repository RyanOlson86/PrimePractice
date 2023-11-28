let people = [
    {
        name: 'John',
        relationship: 'friend',
        wearing: ['watch', 'stylish hat', 'ascot tie', 'gloves']
    },
    {
        name: 'Sarah',
        relationship: 'unknown',
        wearing: ['gloves', 'cardigan', 'scarf', 'shoes']
    },
    {
        name: 'Naseem',
        relationship: 'Uncle',
        wearing: ['shoes', 'jacket', 'plain hat', 'watch']
    }
];

// function to search through array of objects. find string in .wearing array
// inputs: peopleArray and searchItem
// process: for loop of peopleArray and search each item (another for loop)
//      second loop to search wearing and conditional to match items
// output: return names of people wearing item

function search(peopleArray, searchItem){
    //console.log (peopleArray, searchItem);
    let results =[];
    for(let person of peopleArray){
        //console.log(person);
        for(let items of person.wearing){
            //console.log(items);
            if(searchItem===items){
                results.push(person.name);
            }
        }
    }
    return results
}

console.log('Results: (expect John and Sarah): ', search(people, 'gloves'))

// This will turn an object (this case first person in the array) into a string
// console.log(JSON.stringify(people[0]))