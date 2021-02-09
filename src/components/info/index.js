import './index.css'

function Info() {
    return (
        <>
          <div className="info-container">
            <div className="circle-image" />
            <h2>Сергей Иванов</h2>
            <a href="https://t.me/iosdeveloper2021">@iosdeveloper2021</a>
            <p>С августа 2018 делал кроссплатформенные приложения под ios/andoird на react-native.</p>
            <p>Теперь есть большое желание сосредоточиться на разработке нативных приложения под ios</p>
            <h4>Санкт-Петербург</h4>
            <div className="icons">
                <a href="https://t.me/iosdeveloper2021" class="t">telegram</a>
                <a href="https://github.com/codebysergeyivanov" class="g">gitgub</a>
            </div>
          </div>
        </>
    );
}

export default Info;