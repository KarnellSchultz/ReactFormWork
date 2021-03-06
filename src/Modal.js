import React from 'react';
import Portal from './Portal';
import styled from 'styled-components';

export default function Modal({ children, toggle, on }) {
	return (
		<Portal>
			{on && (
				<ModalWrapper>

					<ModalCard>
						<CloseButton onClick={toggle}> Close </CloseButton>
						<div>{children}</div>
					</ModalCard>
                    <Background onClick={toggle}/>
				</ModalWrapper>
			)}
		</Portal>
	);
}

const ModalWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalCard = styled.div`
    position: relative;
    background: white;
    border-radius: 5px;
    padding: 15px;
    min-width: 320px;
    margin-bottom: 20%;
    box-shadow: 2px 2px 10px rgba(0,0,0, 0.3);
    z-index: 10;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
`;

const Background = styled.div`
position: absolute;
width: 100%;
height: 100%;
top:0;
right:0;
background: black;
opacity: 0.4;
`;