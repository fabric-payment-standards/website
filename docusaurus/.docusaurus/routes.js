import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/specs/',
    component: ComponentCreator('/specs/', '648'),
    exact: true
  },
  {
    path: '/specs/',
    component: ComponentCreator('/specs/', '3f7'),
    routes: [
      {
        path: '/specs/',
        component: ComponentCreator('/specs/', 'c4c'),
        routes: [
          {
            path: '/specs/',
            component: ComponentCreator('/specs/', '1da'),
            routes: [
              {
                path: '/specs/canonical-payment',
                component: ComponentCreator('/specs/canonical-payment', '6c4'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/canonical-payment/core-concepts',
                component: ComponentCreator('/specs/canonical-payment/core-concepts', 'e80'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/canonical-payment/governance',
                component: ComponentCreator('/specs/canonical-payment/governance', '31c'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/canonical-payment/guides',
                component: ComponentCreator('/specs/canonical-payment/guides', '2eb'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/canonical-payment/overview',
                component: ComponentCreator('/specs/canonical-payment/overview', '82a'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/canonical-payment/reference',
                component: ComponentCreator('/specs/canonical-payment/reference', 'a8e'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/canonical-payment/SPEC',
                component: ComponentCreator('/specs/canonical-payment/SPEC', '100'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack',
                component: ComponentCreator('/specs/cashpack', '670'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/business-model/',
                component: ComponentCreator('/specs/cashpack/business-model/', '2a0'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/core-concepts/',
                component: ComponentCreator('/specs/cashpack/core-concepts/', '177'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/governance/',
                component: ComponentCreator('/specs/cashpack/governance/', 'a75'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/guides/',
                component: ComponentCreator('/specs/cashpack/guides/', '26b'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/overview/',
                component: ComponentCreator('/specs/cashpack/overview/', '298'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/reference/',
                component: ComponentCreator('/specs/cashpack/reference/', 'a01'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/cashpack/SPEC',
                component: ComponentCreator('/specs/cashpack/SPEC', '14a'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/disposable-keys',
                component: ComponentCreator('/specs/disposable-keys', 'd42'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/disposable-keys/core-concepts',
                component: ComponentCreator('/specs/disposable-keys/core-concepts', 'fb8'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/disposable-keys/governance',
                component: ComponentCreator('/specs/disposable-keys/governance', 'aa3'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/disposable-keys/guides',
                component: ComponentCreator('/specs/disposable-keys/guides', '815'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/disposable-keys/overview',
                component: ComponentCreator('/specs/disposable-keys/overview', '7f1'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/disposable-keys/reference',
                component: ComponentCreator('/specs/disposable-keys/reference', '779'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/disposable-keys/SPEC',
                component: ComponentCreator('/specs/disposable-keys/SPEC', 'f21'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack',
                component: ComponentCreator('/specs/stablecoin-stack', '7de'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001', 'cbf'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/business-model',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/business-model', '25f'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/core-concepts',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/core-concepts', 'a1a'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/governance',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/governance', 'c56'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/guides',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/guides', 'e35'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/overview',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/overview', '937'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/reference',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/reference', 'a06'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-001/SPEC',
                component: ComponentCreator('/specs/stablecoin-stack/ss-001/SPEC', '9e6'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002', '19c'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/core-concepts',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/core-concepts', '130'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/governance',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/governance', '2cd'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/guides',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/guides', 'be4'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/overview',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/overview', 'b17'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/reference',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/reference', '801'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-002/SPEC',
                component: ComponentCreator('/specs/stablecoin-stack/ss-002/SPEC', 'a15'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-003',
                component: ComponentCreator('/specs/stablecoin-stack/ss-003', 'd6c'),
                exact: true,
                sidebar: "fpsfSidebar"
              },
              {
                path: '/specs/stablecoin-stack/ss-003/SPEC',
                component: ComponentCreator('/specs/stablecoin-stack/ss-003/SPEC', '72d'),
                exact: true,
                sidebar: "fpsfSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
