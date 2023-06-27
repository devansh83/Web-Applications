import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Desktopography',
      description:
      "Making any surface work as a touch screen using computer vision",
      photo: '/src/assets/projects/img1.png'
    },
    {
      title: 'Intro to ML & DL',
      description:
      "Various concepts such as Linear and Logistic Regression, KNN, Decision Trees, SVM, K-Means Clustering, Neural Networks etc.",
      photo: '/src/assets/projects/img2.png'
    },
    {
      title: 'Web Applications',
      description:
      "Using HTML, CSS, JS, Django, React and Docker to create a fully functional web application",
      photo: '/src/assets/projects/img3.png'
    },
  ];
  return (
    <div className='px-7 md:px-10 my-8' id="projects">
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Featured Projects:</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2'>
        As a sophomore who has been working in the industry for more than 23 years, I have done many projects. 
        Here are some of the major ones.
      </p>

      <div className='grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-y-5 my-6 items-center justify-center'>
        {
          projects.map((project,index) => <div key={index} className='flex flex-col shadow-sm md:w-[343px] bg-[#31313f] rounded p-4'>
            <a href={project.photo} className='mb-4'>
              <img src={project.photo} alt="" />
            </a>
            <h3 className='text-primary font-semibold text-lg'>{project.title}</h3>
            <p className='text-white mt-1'>{project.description}</p>

            <div className='mt-5'>
              <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white
              hover:text-primary transition-all duration-500'>About me</button>
              <button className='btn outline px-6 py-1.5 rounded border-nome text-white ml-5'>Projects</button>
            </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Projects;