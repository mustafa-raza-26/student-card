let display = document.getElementById('display');

let studentData = [
    {
        'studentName': 'Ali',
        'id': '829949',
        'img': './assets/m1.webp',
        'course': 'Web & App Developnment'
    },

    {
        'studentName': 'Waqar',
        'id': '828649',
        'img': './assets/m2.webp',
        'course': 'Web & App Developnment'
    },

    {
        'studentName': 'Alicee',
        'id': '808449',
        'img': './assets/m4.webp',
        'course': 'Web & App Developnment'
    },
];

for (let card of studentData) {

    display.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="student-card">
                <img src="${card.img}" alt="${card.studentName}"class="student-img">
                <div class="student-content">
                    <h5>${card.studentName}</h5>
                    <p class="course">${card.course}</p>
                    <p class="description">If you like my work, consider supporting me and help me grow.</p>
                    <div class="stats">
                        <div>
                        <strong>Student ID</strong>
                        <small>${card.id}</small>
                        </div>
                        <div>
                        <strong>Course</strong>
                        <small>${card.course}</small>
                        </div>

                    </div>

                    <div class="buttons">
                        <button class="follow-btn">Follow</button>
                        <button class="profile-btn">View profile</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
