import './index.css'
import ItemApp from './components'

function Apps() {
    return (
        <div className="apps-container">
            <h2>Apps</h2>
            <ItemApp 
              name="Приложение моей мечты" 
              discription="Soon. Идеальное приложение по тайм менеджменту. Планирую выложить на маркет" 
              link="/" 
              type="product"
            />
            <ItemApp 
              name="Chat App" 
              discription="UIKit. Верстка данного приложения выполнена исключительно программно. Применялась технология Diffable Data Sources & Compositional Layouts. Работа с FireBase. Использовалась библиотека MessageKit " 
              link="https://github.com/codebysergeyivanov/ChatApp" 
              type="tranging"
            />
            <ItemApp 
              name="Music App" 
              discription="Apple music на минималках :). UIKit + SwiftUI. Верстка - без использования storyboard. Применялась архитектура Clear Swift. Один из экранов сделан при помощьи Swift UI. Работа с анимацией и AVKit" 
              link="https://github.com/codebysergeyivanov/MusicApp" 
              type="tranging"
            />
        </div>
    );
}

export default Apps;