import React, {ChangeEvent} from 'react'
import S from './ProfileStatus.module.css'

//========================================================================================

type ProfileStatusPropsType = {
    status: string
}

//========================================================================================

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        input: this.props.status,
        editMode: false
    }

    onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            input: event.currentTarget.value
        })
    }

    editModeON = () => {
        this.setState({
            editMode: true
        })
    }

    editModeOFF = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={S.profileStatus}>

                {!this.state.editMode ?
                    <span
                        onDoubleClick={this.editModeON}
                    >{this.props.status}</span>
                    :
                    <input
                        type="text"
                        value={this.state.input}
                        onChange={this.onChangeHandler}
                        onBlur={this.editModeOFF}
                        autoFocus={true}
                    />
                }

            </div>
        )
    }

}