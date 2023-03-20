const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section:[
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
    enrollStudent : function (sectionNum)
    {
        const enrolledStudent = this.section.findIndex((section) => section.sectionNum == sectionNum);
        if (enrolledStudent >= 0){
            this.section[enrolledStudent].enrolled++;
            renderSections(aCourse.section);
        }
    },
    dropStudent : function (sectionNum) {
        const dropedStudent = this.section.findIndex(
            (section) => section.sectionNum == sectionNum);
        if (dropedStudent >= 0){
            this.section[dropedStudent].enrolled--;
            renderSections(aCourse.section);
        }    
    }
};

    function setCourseInfo(course) {
        document.getElementById('courseName').innerHTML = course.name;
        document.getElementById('courseCode').innerHTML = course.code;
    };

    function renderSections(sections) {
        const html = sections.map((section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`);
        document.getElementById('sections').innerHTML = html.join('');
    };

    document.getElementById('enrollStudent').addEventListener('click', () => {
        const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
        aCourse.enrollStudent(sectionNum);});


    document.getElementById('dropStudent').addEventListener('click', () => {
        const sectNum = document.getElementById('sectionNumber').value;
        aCourse.dropStudent(sectNum);
    })

    setCourseInfo(aCourse);
    renderSections(aCourse.section);

    