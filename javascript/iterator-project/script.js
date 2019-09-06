const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'Scotland, Uk',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingFor: 'male',
        location: 'london, Uk',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Erik Price',
        age: 41,
        gender: 'male',
        lookingFor: 'female',
        location: 'Tabuk, KSA',
        image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
];

const profiles = profileIterator(data);

// call first profile
nextProfile();
// next event
document.getElementById('next').addEventListener('click', nextProfile)

//next profile function
 function nextProfile() {
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
                                                                <ul class="list-group">
                                                                    <li class="list-group-item">Name: ${currentProfile.name}</li>
                                                                    <li class="list-group-item">Age: ${currentProfile.age}</li>
                                                                    <li class="list-group-item">Preference: ${currentProfile.gender} Looking for ${currentProfile.lookingFor}</li>
                                                                    <li class="list-group-item">Location: ${currentProfile.location}</li>
                                                                </ul>
                                                            `;
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // no more profiles
    window.location.reload();
   }
 }

// profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;



    return {
        next: function() {
            return nextIndex < profiles.length ? 
                  { value: profiles[nextIndex++], done: false} :
                  {done: true};
        }
    };
}