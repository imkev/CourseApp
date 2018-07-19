import { Injectable } from '@angular/core';

@Injectable()
export class CourseService{
    
    getCourses()
    {
        return COURSES;
    }

    getSpecificCourse(id: number){
        return COURSES.find(x => x.id === id)
    }
}

const COURSES= [
        {
            id: 1,
            Name: 'Selenium Framework Development',
            ReleaseDate: '9/26/2017',
            imageurl: '/app/assets/images/selenium.png',
            Duration: '3 Hours',
            Level: 'Beginners'
        },
        {
            id: 2,
            Name: 'SpecFlow Automation Development',
            ReleaseDate: '10/30/2017',
            imageurl: '/app/assets/images/visualstudio.png',
            Duration: '6 Hours',
            Level: 'Intermediate'
        },
        {
            id: 3,
            Name: 'Docker on Windows',
            ReleaseDate: '8/26/2017',
            imageurl: '/app/assets/images/docker.png',
            Duration: '4 Hours',
            Level: 'Advanced'
        },
        {
            id: 4,
            Name: 'Android Automation',
            ReleaseDate: '6/26/2017',
            imageurl: '/app/assets/images/Appium.png',
            Duration: '7 Hours',
            Level: 'Beginners'
        }
    ]