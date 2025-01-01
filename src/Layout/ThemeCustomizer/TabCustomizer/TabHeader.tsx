import { PreviewCustomization } from "@/Constant";

const TabHeader = ({ callbackNav }: { callbackNav: (test: string, open: boolean) => void; }) => {

  return (
    <div className="customizer-header">
      <i className="icofont-close icon-close" onClick={() => callbackNav("", false)} />
      <h5 className="f-w-700">{PreviewCustomization}</h5>
      <p className="mb-0">Try It Real Time <i className="fa fa-thumbs-o-up txt-primary" /></p>
    </div>
  )
}

export default TabHeader