export var rootURL = 'http://localhost:3000'

export function getToken() {
  let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  console.log('token = ' + token)
  return token
}

/* These were replaced with 
export function login(email, password, onLoggedIn) {
  console.log("*** APIs.login()")
  fetch(rootURL + '/login.json',
  {
    method: 'POST',
    body: JSON.stringify({email: email, password: password}),
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    console.log("/login Response=" + response)
    console.log(response)
    return response.json()
  })
  .then((data) => {
    console.log("/login JSON = " + JSON.stringify(data))
    if (onLoggedIn) onLoggedIn()
  });
}

export function fetchLists(setLists) {
  console.log("*** APIs.fetchLists()")
  fetch(rootURL + '/lists.json', {credentials: 'include'}) // credentials: include for passing cookies
    .then((response) => {
      console.log("/lists Response=" + response)
      console.log(response)
      return response.json()
    })
    .then((data) => {
      console.log("/lists JSON = " + JSON.stringify(data))
      if (setLists) setLists(data)
    });
}

export function fetchTasks(listID, setTasks) {
  console.log("*** APIs.fetchTasks()")
  fetch(rootURL + '/lists/'+listID+'/tasks.json', {credentials: 'include'}) // credentials: include for passing cookies
    .then((response) => {
      console.log("/lists/"+listID+" Response=" + response)
      console.log(response)
      return response.json()
    })
    .then((data) => {
      console.log("/lists/"+listID+" JSON = " + JSON.stringify(data))
      if (setTasks) setTasks(data)
    });
}

export function fetchSharees(listID, setSharees) {
  fetch('rootURL + /lists/' + listID + '/sharees.json')
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      if (data) {
        console.log("fetched Sharee(s) = " + data)
        if (setSharees) setSharees(data)
      }
    });
}

export function createList(list, onListCreated) {
  console.log("CREATING List " + list.name)
  console.log(list)

  fetch('rootURL + /lists.json', 
  {
    method: 'POST',
    body: JSON.stringify({list: list}),
    headers: { 
      'Content-Type': 'application/json',
      'X-CSRF-Token': getToken()
    }
  }).then((response) => { 
    console.log(response)
    if (onListCreated) onListCreated()
  })
}

export function createTask(listID, task, onTaskCreated) {
  console.log("CREATING Task " + task.name + " - priority=" + task.priority)
  console.log(task)

  fetch(rootURL + '/lists/' + listID + '/tasks.json', 
  {
    method: 'POST',
    body: JSON.stringify({task: task}),
    headers: { 
      'Content-Type': 'application/json',
      'X-CSRF-Token': getToken()
    }
  }).then((response) => { 
    console.log(response)
    if (onTaskCreated) onTaskCreated()
  })
}

export function updateTask(task, onTaskUpdated) {
  console.log('UPDATING Task ' + task.id)

  fetch(rootURL + '/tasks/' + task.id + '.json', 
  {
    method: 'PUT',
    body: JSON.stringify({task: task}),
    headers: { 
      'Content-Type': 'application/json',
      'X-CSRF-Token': getToken()
    }
  }).then((response) => { 
    console.log(response)
    if (onTaskUpdated) onTaskUpdated()
  })
}

export function deleteTask(id, onTaskDeleted) {
  console.log('DELETING Task ' + id)

  fetch(rootURL + '/tasks/' + id + '.json', 
  {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json',
      'X-CSRF-Token': getToken()
    }
  }).then((response) => { 
    console.log(response)
    if (onTaskDeleted) onTaskDeleted()
  })
}
*/
