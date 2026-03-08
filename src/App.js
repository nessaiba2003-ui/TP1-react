// App.js
import ListeCourses from './ListeCourses';

function App() {
  const coursesSemaine = ["Pommes", "Bananes", "Lait", "Œufs", "Pain"];
  
  const coursesRamadan = [
    "Dattes", 
    "Semoule", 
    "Farine", 
    "Huile d'olive", 
    "Miel", 
    "Lait", 
    "Œufs",
    "Fromage",
    "Olives",
    "Thé à la menthe"
  ];

  return (
    <div>
      <h1>🛒 Mes Listes de Courses</h1>
      
      <h2>📅 Courses de la semaine</h2>
      <ListeCourses elements={coursesSemaine} />
      
      <h2>🌙 Courses pour le Ramadan</h2>
      <ListeCourses elements={coursesRamadan} />
    </div>
  );
}

export default App;



