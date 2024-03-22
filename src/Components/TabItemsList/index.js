import './index.css'

const TabItemsList = props => {
  const {imageDetails, onClickThambnail} = props
  const {id, imageUrl, thumbnailUrl, category} = imageDetails

  const clickThamnail = () => {
    onClickThambnail(id)
  }

  return (
    <li>
      <button className="thambbail-btn" onClick={clickThamnail}>
        <img src={thumbnailUrl} className="image" alt="thumbnail" />
      </button>
    </li>
  )
}
export default TabItemsList
