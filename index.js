function findMatching(drivers, name) {
    return drivers.filter(target =>
        (target.toUpperCase()) == (name.toUpperCase())
    );
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(target => 
        target.indexOf(letters) === 0
    );
}

function matchName(drivers, string) {
    return drivers.filter(match => 
        match['name'] === string    
    );
}