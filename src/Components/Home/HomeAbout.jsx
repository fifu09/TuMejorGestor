import { BodyWithTitle } from "../BodyWithTitle";
import { TimeLineItem } from "../TimeLineItem";

export const HomeAbout = () => {
  return (
    <BodyWithTitle title="Conócenos">
      <ol className="flex flex-col h-full w-full justify-center items-center relative border-s border-black">
        <TimeLineItem
          date="2016"
          title="El Comienzo"
          text="En este año fundacional, un equipo diverso de apasionados por la tecnología y la contabilidad se unió para abordar los desafíos financieros que enfrentaban como empresarios. Movidos por el deseo de simplificar la vida financiera de todos, dieron los primeros pasos hacia la creación de TuMejorGestor."
        />
        <TimeLineItem
          date="2018"
          title="Desarrollo Intenso"
          text="Con ingenieros de software y mentes creativas a la cabeza, el equipo se sumergió en el desarrollo intensivo de la aplicación. Recordando las noches de estrés y las tareas administrativas interminables, estaban decididos a cambiar ese panorama. Durante estos años, llevaron a cabo pruebas exhaustivas y realizaron mejoras constantes para perfeccionar TuMejorGestor."
        />
        <TimeLineItem
          date="2020"
          title="Lanzamiento Exitoso"
          text="Después de años de arduo trabajo, en 2018, TuMejorGestor vio la luz del día. La aplicación, cargada de características innovadoras, desde el seguimiento de gastos hasta la asesoría fiscal integrada, se lanzó con éxito. Marcó el comienzo de una nueva era en la gestión financiera personal y empresarial."
        />
        <TimeLineItem
          date="2022"
          title="Historias de Éxito"
          text="A medida que la aplicación ganaba popularidad, las historias de éxito de los usuarios se multiplicaban. TuMejorGestor se convirtió en una herramienta esencial para miles de usuarios, simplificando sus vidas financieras y proporcionando un apoyo invaluable en cada paso del camino."
        />
      </ol>
      <div className="flex justify-center items-center h-full w-full">
        <img src="./src/Static/AboutHappy.jpg" />
      </div>
    </BodyWithTitle>
  );
};
