import React from 'react';
import logo from './logo.svg';
import './App.css';

import {CssReset, colors, spacers, Input, DropdownButton, Checkbox} from '@dhis2/ui-core';

import { Arrow, FolderClosed, FolderOpen, SingleUnit, Hospital, MoreDots } from './assets/icons.js';

const OrgUnitTree = props => (
  <div class="ou-tree">
    {props.children}
    <style jsx>{`
        .ou-tree {
          border: 1px solid ${colors.grey500};
          background: ${colors.grey100};
        }
      `}
    </style>
  </div>
);

const TreeHeader = props => (
  <div class="tree-header">
    <div class="filter-wrap"><Input dense placeholder="Search for an org. unit"></Input></div>
    <div class="menu-button-wrap">
      <DropdownButton secondary>test</DropdownButton>
    </div>

    <style jsx>
      {`
        .tree-header {
          padding: ${spacers.dp8};
          display:flex;
        }
        .menu-button-wrap {
          margin-left:auto;
        }
        .filter-wrap {
          flex:3;
        }
        `}
    </style>
  </div>
)

const UnitListWrap = props => (
  <div class="unit-list-wrap">
    {props.children}
    <style jsx>
    {`
      .unit-list-wrap {
        background:white;
        padding:${spacers.dp8};
      }
      `}</style>
  </div>
)

const UnitList = props => (
  <ul class="unit-list">
    {props.children}
    <style jsx>
    {`
      .unit-list {
        margin:0;
        padding:0;
      }

      .unit-list .unit-list {
        margin-left: ${spacers.dp12};
        border-left: 1px solid ${colors.grey400};
      }

      `}</style>
  </ul>

)

const Unit = props => (
  <li className={`
      unit
      ${"open" in props && " unit-open"}
      ${"closed" in props && " unit-closed"}
        `}>
    <Arrow/>
    <Checkbox dense/>
    {"closed" in props && <FolderClosed/>}
    {"open" in props && <FolderOpen/>}
    {props.icon}
    <span class ="unit-title">{props.name}<MoreDots/></span>

    <style jsx>
    {`
      .unit {
        font-size:14px;
        line-height:16px;
        padding: 0px ${spacers.dp4};
        display:flex;
        align-items: start;
        margin-bottom:${spacers.dp4};
        border-radius:3px;
      }

      .unit:hover {
        background:${colors.grey200};
        cursor: pointer;
      }

      .expand-arrow {
        opacity: 0;
      }

      .unit-open .expand-arrow {
        transform: rotate(90deg);
        opacity:1
      }

      .unit-closed .expand-arrow {
        opacity:1;
      }

      .unit-title {
        margin-left:${spacers.dp4};
      }
      .more-dots {
        opacity:0;
        margin-left:${spacers.dp4};
      }
      .unit:hover .more-dots {
        opacity:1;
      }

      `}</style>
  </li>
)

function App() {
  return (
    <>
    <CssReset/>
    <OrgUnitTree>
      <TreeHeader></TreeHeader>
      <UnitListWrap>
        <UnitList>
            <Unit name="Morkep Province" open></Unit>
            <UnitList>
              <Unit name="101 MADIGBO" open></Unit>
              <Unit name="102 MOBAW"  icon={<SingleUnit/>}></Unit>
              <Unit name="103 MAKAYONI" open></Unit>
                <UnitList>
                  <Unit name="10101 Magbankori Municipality" closed icon={<Hospital/>}></Unit>
                    <UnitList>
                      <Unit name="SENDUMA HOSPITAL" closed icon={<Hospital/>}></Unit>
                        <Unit name="MARENKAW HEALTH CLINIC"  icon={<SingleUnit/>}></Unit>
                        <Unit name="YANDAWORO COMMUNITY HEALTH UNIT, YANDAWORO"  icon={<SingleUnit/>}></Unit>
                        <Unit name="MELIKURU OUTREACH CENTER"  icon={<SingleUnit/>}></Unit>
                    </UnitList>
                </UnitList>
            </UnitList>
        </UnitList>
      </UnitListWrap>
    </OrgUnitTree>
    </>
  );
}

export default App;
