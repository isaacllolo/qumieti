import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Course.scss';

const Course = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Curso de Prueba',
      contents: [
        {
          id: 1,
          title: 'Contenido de Prueba',
          lessons: [
            { id: 1, title: 'Lección 1', description: 'Descripción de la Lección 1', completed: false },
            { id: 2, title: 'Lección 2', description: 'Descripción de la Lección 2', completed: false },
          ],
        },
      ],
    },
  ]);

  const handleLessonCompletion = (courseId, lessonId) => {
    // Simulación de marcado de lección como completada
    const updatedCourses = courses.map(course => {
      if (course.id === courseId) {
        const updatedContents = course.contents.map(content => {
          const updatedLessons = content.lessons.map(lesson => {
            if (lesson.id === lessonId) {
              return { ...lesson, completed: true };
            }
            return lesson;
          });

          return { ...content, lessons: updatedLessons };
        });

        return { ...course, contents: updatedContents };
      }
      return course;
    });

    setCourses(updatedCourses);
  };

  return (
    <div className='course-container'>
      {courses.map(course => (
        <div key={course.id} className='lesson'>
          <div className='text'>
            {course.contents.map(content => (
              <div key={content.id} className='text-wrapper'>
                <h3>{content.title}</h3>
                <ul>
                  {content.lessons.map(lesson => (
                    <li key={lesson.id}>
                      <Link to={`/courses/${course.id}/contents/${content.id}/lessons/${lesson.id}`}>
                        <div className="lesson-item">
                          <span className='lesson-title'>{lesson.title}</span>
                          <p className='lesson-description'>{lesson.description}</p>
                          
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
