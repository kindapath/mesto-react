export default function Main({onEditAvatar, onEditProfile, onAddPlace}) {

    return (
        <main className="content page__content">
            <section className="profile content__profile">
                <div className="profile__avatar-hover" onClick={onEditAvatar}><img className="profile__avatar" src="<%=require('./images/profile__avatar_vin.gif')%>" alt="Фотография профиля" /></div>
                <div className="profile__info">
                    <h1 className="profile__name">Вин Дизель</h1>
                    <button className="profile__edit-btn" onClick={onEditProfile} type="button" />
                    <p className="profile__job">Любит крутые тачки и семью</p>
                </div>
                <button className="profile__add-btn" onClick={onAddPlace} type="button" />
            </section>
            <section className="elements content__elements">
                <template id="element-template" />
            </section>
        </main>
    )
}
