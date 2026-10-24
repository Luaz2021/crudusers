import React from "react";

export const UsersList = ({
    users,
    selectUser,
    deleteUser,
}) => {
    return (
        <section className="list">
            <div className="list-header">
                <h2>Directorio de Usuarios ({users.length})</h2>
                <span className="badge-offline">💾 Persistencia Local / 100% Operativo</span>
            </div>
            {users.length === 0 ? (
                <div className="empty-state">
                    <p>No hay usuarios registrados. ¡Crea uno nuevo en el formulario!</p>
                </div>
            ) : (
                users.map(el => (
                    <article key={el.id}>
                        <div className="user-details">
                            <h2>{el.first_name} {el.last_name}</h2>
                            <p className="user-email"><i className="fa-solid fa-envelope"></i> {el.email || "Sin correo"}</p>
                            <p className="user-birthday"><i className="fa-solid fa-cake-candles"></i> {el.birthday || "Sin fecha"}</p>
                        </div>
                        <div className="button-contain">
                            <button 
                                className="btn-update" 
                                title="Editar usuario"
                                aria-label="Editar usuario"
                                onClick={() => selectUser(el)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit-circle" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z" />
                                    <path d="M16 5l3 3" />
                                    <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999" />
                                </svg>
                            </button>
                            <button 
                                className="btn-delete" 
                                title="Eliminar usuario"
                                aria-label="Eliminar usuario"
                                onClick={() => deleteUser(el.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="4" y1="7" x2="20" y2="7" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                            </button>
                        </div>
                    </article>
                ))
            )}
        </section>
    );
};
