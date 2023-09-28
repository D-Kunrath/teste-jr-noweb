import './styles.css'

function LabeledIcon({ label, image, labelPosition = "top" }) {
  return (
    <div>
      {label} - {image}
    </div>
  )
}

export default LabeledIcon