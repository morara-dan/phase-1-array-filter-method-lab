function findMatching(drivers, searchStr) {
    const lowerSearch = searchStr.toLowerCase();
    return drivers.filter(name => 
        name.toLowerCase().includes(lowerSearch)
    );
}

function fuzzyMatch(drivers, prefix) {
    return drivers.filter(name => 
        name.startsWith(prefix)
    );
}

function matchName(driverObjects, name) {
    return driverObjects.filter(driver => 
        driver.name === name
    );
}