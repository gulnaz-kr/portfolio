const insert = document.getElementById('projects-insert');

fetch('projects.json', { method: 'GET' })
  .then((res) => res.json())
  .then((projects) => {
    projects.forEach((project) =>
      insert.insertAdjacentHTML(
        'beforeend',
        `
          <div class="col-sm-12">
            <div class="project">
              <div class="project-image">
                <img src="${project.image}" />
              </div>
              <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <a class="button" href="${project.url}" target="_blank">Github</a>
              </div>
            </div>
          </div>
      `,
      ),
    );
  });
