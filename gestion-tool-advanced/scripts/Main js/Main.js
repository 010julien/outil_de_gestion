function initializeData() {
  if (!localStorage.getItem("projects")) {
    const defaultProjects = [
      {
        id: 1,
        name: "Site Web Corporatif",
        description: "Développement d'un site web responsive pour l'entreprise",
        manager: "Sophie Martin",
        startDate: "2023-05-01",
        endDate: "2023-08-15",
        progress: 65,
        status: "active",
      },
      {
        id: 2,
        name: "Application Mobile",
        description: "Création d'une application iOS et Android",
        manager: "Thomas Bernard",
        startDate: "2023-06-10",
        endDate: "2023-10-30",
        progress: 30,
        status: "active",
      },
    ];
    localStorage.setItem("projects", JSON.stringify(defaultProjects));
  }

  if (!localStorage.getItem("tasks")) {
    const defaultTasks = [
      {
        id: 1,
        title: "Design Homepage",
        description: "Créer le design de la page d'accueil",
        projectId: 1,
        assignedTo: "Sophie Martin",
        status: "completed",
        priority: "high",
        dueDate: "2023-05-15",
      },
      {
        id: 2,
        title: "Développement Frontend",
        description: "Implémenter le frontend avec React",
        projectId: 1,
        assignedTo: "Jean Dupont",
        status: "in-progress",
        priority: "high",
        dueDate: "2023-06-30",
      },
      {
        id: 3,
        title: "API Backend",
        description: "Développer les endpoints API",
        projectId: 1,
        assignedTo: "Marie Leroy",
        status: "in-progress",
        priority: "medium",
        dueDate: "2023-07-15",
      },
      {
        id: 4,
        title: "Conception UX",
        description: "Étudier l'expérience utilisateur",
        projectId: 2,
        assignedTo: "Thomas Bernard",
        status: "waiting",
        priority: "medium",
        dueDate: "2023-06-20",
      },
    ];
    localStorage.setItem("tasks", JSON.stringify(defaultTasks));
  }

  if (!localStorage.getItem("users")) {
    const defaultUsers = [
      {
        id: 1,
        name: "Sophie Martin",
        role: "Chef de Projet",
        avatar:
          "https://ui-avatars.com/api/?name=Sophie+Martin&background=4e73df&color=fff",
      },
      {
        id: 2,
        name: "Thomas Bernard",
        role: "Développeur",
        avatar:
          "https://ui-avatars.com/api/?name=Thomas+Bernard&background=36b9cc&color=fff",
      },
      {
        id: 3,
        name: "Jean Dupont",
        role: "Designer",
        avatar:
          "https://ui-avatars.com/api/?name=Jean+Dupont&background=1cc88a&color=fff",
      },
      {
        id: 4,
        name: "Marie Leroy",
        role: "Développeuse",
        avatar:
          "https://ui-avatars.com/api/?name=Marie+Leroy&background=f6c23e&color=000",
      },
    ];
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
}
