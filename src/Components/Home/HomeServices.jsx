import { BodyWithTitle } from "../BodyWithTitle";
import { ServiceCard } from "../ServiceCard";

export const HomeServices = () => {
  return (
    <BodyWithTitle title="Servicios">
      <div className="grid grid-cols-3 gap-12">
        <ServiceCard
          title="Declaración de IVA Simplificada"
          description="Olvídate de las complicaciones con nuestra herramienta de declaración de IVA. TuMejorGestor facilita el proceso, permitiéndote registrar y gestionar tus transacciones de forma eficiente, asegurando una presentación impecable y a tiempo."
        />
        <ServiceCard
          title="Gestión Integral de Impuestos"
          description="Nuestro servicio abarca la gestión integral de impuestos, desde el cálculo preciso hasta la presentación puntual. Con TuMejorGestor, asegúrate de cumplir con todas tus obligaciones tributarias, minimizando riesgos y maximizando beneficios."
        />
        <ServiceCard
          title="Facturación Eficiente"
          description="Simplifica la creación y seguimiento de facturas con nuestra plataforma intuitiva. Desde la emisión hasta el control de pagos, TuMejorGestor optimiza el proceso de facturación para que puedas centrarte en tu negocio mientras mantenemos tus finanzas organizadas."
        />
        <ServiceCard
          title="Asesoramiento Financiero"
          description="Obtén asesoramiento financiero adaptado a tus necesidades específicas. Nuestro equipo de expertos está listo para brindarte orientación sobre inversiones, estrategias fiscales y optimización de recursos, ayudándote a tomar decisiones informadas para el crecimiento de tu negocio."
        />
        <ServiceCard
          title="Declaración de Renta sin Estrés"
          description="Deja la declaración de renta en manos de profesionales. Con TuMejorGestor, la preparación y presentación de tu declaración de renta se convierte en un proceso sin estrés, asegurándote de aprovechar todas las deducciones y beneficios fiscales disponibles."
        />
      </div>
    </BodyWithTitle>
  );
};
