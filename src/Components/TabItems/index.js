import './index.css'

const TabItems = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabStyle = isActive ? 'isActiveTab' : null

  const onclickBtn = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li>
      <button className={`tab-text ${activeTabStyle}`} onClick={onclickBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
