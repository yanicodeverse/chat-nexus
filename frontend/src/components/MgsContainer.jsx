import React, { useState } from "react";

const MgsContainer = ({ disabled, handleSubmit, message, data, setMessage}) => {

	return (
		<div className="container">
			<div id="msg_output_container">{data}</div>
			<div id="msg_control">
				<form action="" onSubmit={handleSubmit}>
					<textarea
						name="msg"
						id="msg"
						value={message}
						cols="55"
						rows="2"
						placeholder="type any msg..."
						onChange={(e) => setMessage(e.target.value)}
						disabled={disabled}
					/>
					<div id="send_button_container">
						<button type="submit" disabled={disabled}>
							send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default MgsContainer;
