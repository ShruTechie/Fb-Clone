import React from "react";
import { EmojiFlags, People, Chat, Storefront, VideoLibrary, ExpandCircleDownRounded} from "@mui/icons-material";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import SidebarGroup from './SidebarGroup';

function Sidebar() {
	return (
		<div className='sidebar'>
			<SidebarRow src={"photoURL"} title={"User"} />
			<SidebarRow Icon={EmojiFlags} title='Pages' />
			<SidebarRow Icon={People} title='Friends' />
			<SidebarRow Icon={Chat} title='Messenger' />
			<SidebarRow Icon={Storefront} title='MarketPlace' />
			<SidebarRow Icon={VideoLibrary} title='Videos' />
			<SidebarRow Icon={ExpandCircleDownRounded} title='See More' />
		
			<div className='shortcuts-unit'>
				<div className='unit-header'>
					<div className='hairline' />
					<p className='txt-196'>Shortcuts</p>
				</div>
				<div className='shortcuts-list'>
					<SidebarGroup groupName="Group1"/>
					<SidebarGroup groupName="Group2"/>
					<div className='list-cell-1 flex-col-hstart-vcenter '>
						<div className='list-cell flex-row-vcenter-hstart'>
							<div className='_-36dp-small-secondary-icon-only flex-col-hstart-vstart'>
								<div className='icon-chevron-down'>
                                    <ExpandCircleDownRounded/>
                                </div>
							</div>
							<div className='text-pairing flex-row-vstart-hstart'>
								<p className='txt-454'>See more</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;