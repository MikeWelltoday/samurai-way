import React, {ChangeEvent, KeyboardEvent} from 'react'
import S from './ProfileStatus.module.css'

//========================================================================================

type ProfileStatusPropsType = {
    status: string
    isStatusChangeable: boolean
    updateStatus: (newStatus: string) => void
}

//========================================================================================

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        statusValue: this.props.status,
        editMode: false
    }

    onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            statusValue: event.currentTarget.value
        })
    }

    editModeON = () => {
        if (this.props.isStatusChangeable) {
            this.setState({
                editMode: true
            })
        }
    }

    editModeOFF = () => {
        const newTitle = this.state.statusValue

        if (newTitle !== this.props.status) {
            if (newTitle.trim()) {
                this.props.updateStatus(newTitle)
            } else {
                this.setState({
                    statusValue: this.props.status
                })
            }
        }

        this.setState({
            editMode: false
        })
    }

    onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.editModeOFF()
        }
    }

    // реакт дает возможность получитсья доступ к предыдущим пропсам и стейту
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {

        // сравнение пропсов
        if (prevProps.status !== this.props.status) {
            this.setState({
                    statusValue: this.props.status
                }
            )
        }
    }

    isMyStatus = this.props.isStatusChangeable ? `${S.myStatus}` : ''

    render() {
        return (
            <div className={S.profileStatus}>

                {!this.state.editMode ?
                    <span
                        className={this.isMyStatus}
                        onDoubleClick={this.editModeON}
                    >{this.props.status}</span>
                    :
                    <input
                        className={this.isMyStatus}
                        type="text"
                        value={this.state.statusValue}
                        onChange={this.onChangeHandler}
                        onBlur={this.editModeOFF}
                        autoFocus={true}
                        onKeyDown={this.onKeyDownHandler}
                    />
                }

            </div>
        )
    }

}