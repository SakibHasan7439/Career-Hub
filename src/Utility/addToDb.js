const getStoredAppliedJob = () =>{
    const storedStrList = localStorage.getItem("job-list");
    if(storedStrList){
        const storedList = JSON.parse(storedStrList);
        return storedList;

    }else {
        return [];
    }
}

const addToStoredList = (id) =>{
    const storedList = getStoredAppliedJob();
    if(storedList.includes(id)){
        console.log("Its already exists");

    }else {
        storedList.push(id);
        const makeListStr = JSON.stringify(storedList);
        localStorage.setItem("job-list", makeListStr);
    }
}

export { addToStoredList, getStoredAppliedJob }