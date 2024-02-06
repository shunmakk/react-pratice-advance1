import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import './PortalBasic.css'

const PortalBasic = () => {
  
  //ダイアログの開閉状態を表すstate (falseは閉じた状態)
  const [show, setShow] = useState(false);

  //ボタンクリック時のハンドラー  (stateをオンオフ)
  const handleDialog = () => setShow(s => !s)


  return (
    <form>
      <button type='button' onClick={handleDialog}>ダイアログ表示</button>
      {show && createPortal(
        <div className='dialog'>
          <p>portalで生成したされたダイアログ</p>
          <button type='button' onClick={handleDialog}>閉じる</button>
        </div>,
        document.getElementById('dialog')
      )}
    </form>
  )
}

export default PortalBasic;