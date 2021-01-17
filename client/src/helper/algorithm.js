export function getPlacement (d) {
    var result;

    // Based on responses, we can automatically move people into specific phases based on Ontrio's released plan
    if (d.occupation === "Caregiver" || d.occupation === "Health care worker" || d.onReserve || (d.residence === "Congregate living (Senior homes, apartments, etc.)" && d.age >= 65) || (d.bipoc && d.age >= 70)) {
        result = firstPhase(d);
    } else if (d.occupation === "Essential Worker (first responders, teachers, food, construction...)" || (d.age >= 40) || (d.bipoc && d.age >= 30) || (d.residence === "Congregate living (Senior homes, apartments, etc.)" && d.age >= 40)) {
        result = secondPhase(d);
    } else {
        result = thirdPhase(d);
    }

    return result;
}

// Based on responses calculates points
function getTotalPoints(d) {
    var score = 0;

    if (d.occupation == "Caregiver") {
        score += 25;
    } else if (d.occupation === "Health care worker") {
        score += 20;
    } else if (d.occupation === "Essential Worker (first responders, teachers, food, construction...)") {
        score += 10;
    } else if (d.occupation === "Student" || d.occupation === "Other") {
        score += 4;
    } else if (d.occupation === "Work from home") {
        score += 5;
    }

    if (d.younguns) {
        score += 3;
    }
    if (d.oldies) {
        score += 5;
    }
    if (d.chronicIllness) {
        score += 5;
    }
    if (d.respIllness) {
        score += 5;
    }
    if (d.hasConditions) {
        score += 5;
    }
    if (d.dangerousWork) {
        score += 10;
    }

    if (d.IDisease) {
        score += 5;
    }
    if (d.firstNation) {
        score += 25
    }
    if (d.bipoc) {
        score += 25;
    }

    if (d.residence === "Congregate living (Senior homes, apartments, etc.)") {
        score += 25;
    }

    return score;
}

function firstPhase (d) {
    // console.log("First Phase!");

    var score = parseInt(d.age);
    var months = ["January", "February", "March"];
    var estimatedMonth = "";

    score += getTotalPoints(d);

    // Predicts month based on points gained
    if (score >= 50) {
        estimatedMonth = months[0];
    } else if (score >= 30 && score < 50) {
        estimatedMonth = months[1];
    } else {
        estimatedMonth = months[2];
    }

    var result = {
        points: score,
        phase: "First",
        month: estimatedMonth
    };

    return result;
}

function secondPhase (d) {  
    // console.log("Second Phase!");  
    
    var score = parseInt(d.age);
    var months = ["April", "May", "Jun", "July"];
    var estimatedMonth = "";

    score += getTotalPoints(d);

    // Predicts month based on points gained
    if (score >= 40) {
        estimatedMonth = months[0];
    } else if (score >= 30 && score < 40) {
        estimatedMonth = months[1];
    } else if (score >= 20 && score < 30) {
        estimatedMonth = months[2];
    } else {
        estimatedMonth = months[3];
    }

    var result = {
        points: score,
        phase: "Second",
        month: estimatedMonth
    };

    return result;
}

function thirdPhase (d) {
    // console.log("Third Phase!");

    var score = parseInt(d.age);
    var months = ["August", "September", "October", "November", "December"];
    var estimatedMonth = "";

    score += getTotalPoints(d);

    // Predicts month based on points gained
    if (score >= 35) {
        estimatedMonth = months[0];
    } else if (score >= 26 && score < 35) {
        estimatedMonth = months[1];
    } else if (score >= 20 && score < 26) {
        estimatedMonth = months[2];
    } else if (score >= 10 && score < 20) {
        estimatedMonth = months[3];
    } else {
        estimatedMonth = months[4];
    }

    var result = {
        points: score,
        phase: "Third",
        month: estimatedMonth
    };

    return result;
}