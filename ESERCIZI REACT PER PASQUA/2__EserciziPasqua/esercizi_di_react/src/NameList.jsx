/*ARGOMENTI       MAP E PROPS
crea una componente NameList che riceva via props un array di nomi e visualizzi ciascun nome come elemento di una lista
*/

const NameList = ({ nomi }) => {
  return (
    <>
      <ul>
        {nomi.map((value, index) => {
          return <li key={index}> {value}</li>;
        })}
      </ul>
    </>
  );
};
export default NameList;
