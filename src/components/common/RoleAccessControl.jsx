import { useState, useEffect, Fragment } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Card, SectionHeader } from './UI'

const rolePrivileges = {
  university: [
    { id: 'manage_settings', label: 'Manage General Settings', desc: 'Allows modifying subdomain mappings and general configs' },
    { id: 'edit_branding', label: 'Tenant Branding Override', desc: 'Customizes subdomains, themes, and logos' },
    { id: 'manage_departments', label: 'Modify Departments', desc: 'Add, remove, or rename academic offices' },
    { id: 'invite_staff', label: 'Invite Admins & Faculty', desc: 'Send registration emails to prospective staff' },
    { id: 'import_csv', label: 'Bulk Roster CSV Uploads', desc: 'Direct upload of student and staff lists' },
    { id: 'approve_content', label: 'Global Content Approval Queue', desc: 'Accept or reject video and document submissions' },
  ],
  department: [
    { id: 'edit_curriculum', label: 'Curriculum Tree Builder', desc: 'Define course streams, semesters, and credits' },
    { id: 'manage_courses', label: 'Create & Edit Courses', desc: 'Manage catalogue listings and class sections' },
    { id: 'assign_faculty', label: 'Assign Course Instructors', desc: 'Map professors to specific sections' },
    { id: 'manage_batches', label: 'Batch and Cohort Planner', desc: 'Schedule active batches and set semesters' },
    { id: 'approve_dept_content', label: 'Dept Content Review Queue', desc: 'Review slides and lectures submitted by faculty' },
    { id: 'view_dept_analytics', label: 'Access Grade Analytics', desc: 'View cohorts GPAs and risk metrics' },
  ],
  faculty: [
    { id: 'create_assignments', label: 'Create Assignments & Quizzes', desc: 'Set up curriculum evaluation points' },
    { id: 'grade_submissions', label: 'Review & Grade Student Work', desc: 'Evaluate homework and give final scores' },
    { id: 'edit_office_hours', label: 'Office Hours Settings', desc: 'Configure student consultation slots' },
    { id: 'post_content', label: 'Upload Lectures & Videos', desc: 'Post files and videos to student streams' },
    { id: 'export_course_grades', label: 'Export Course Gradebooks', desc: 'Download student grades workbook' },
  ]
}

export default function RoleAccessControl({ currentRole }) {
  const [email, setEmail] = useState('')
  const [selectedRole, setSelectedRole] = useState('')
  const [expandedEmail, setExpandedEmail] = useState(null)
  const [permissions, setPermissions] = useState([
    { email: 'dean.mit@mit.edu', role: 'university', label: 'University Admin', scope: 'MIT', features: ['invite_staff', 'approve_content'] },
    { email: 'provost@stanford.edu', role: 'university', label: 'University Admin', scope: 'Stanford University', features: ['manage_settings', 'edit_branding'] },
    { email: 'hod.cs@mit.edu', role: 'department', label: 'Department Admin', scope: 'CS Dept, MIT', features: ['edit_curriculum', 'manage_courses'] },
    { email: 'aisha.patel@mit.edu', role: 'faculty', label: 'Faculty', scope: 'CS Dept, MIT', features: ['create_assignments', 'grade_submissions'] },
    { email: 'marcus.williams@mit.edu', role: 'faculty', label: 'Faculty', scope: 'CS Dept, MIT', features: ['create_assignments', 'post_content'] },
    { email: 'yuna.park@mit.edu', role: 'faculty', label: 'Faculty', scope: 'CS Dept, MIT', features: ['grade_submissions', 'post_content'] },
  ])

  const roleHierarchy = {
    super: [
      { value: 'university', label: 'University Admin' },
      { value: 'department', label: 'Department Admin' },
      { value: 'faculty', label: 'Faculty' }
    ],
    university: [
      { value: 'department', label: 'Department Admin' },
      { value: 'faculty', label: 'Faculty' }
    ],
    department: [
      { value: 'faculty', label: 'Faculty' }
    ],
    faculty: [],
    student: []
  }

  const assignableRoles = roleHierarchy[currentRole] || []

  useEffect(() => {
    if (assignableRoles.length > 0) {
      setSelectedRole(assignableRoles[0].value)
    } else {
      setSelectedRole('')
    }
  }, [currentRole])

  const handleGrant = (e) => {
    e.preventDefault()
    if (!email || !selectedRole) return
    const roleLabel = assignableRoles.find(r => r.value === selectedRole)?.label || selectedRole
    const defaultPrivileges = rolePrivileges[selectedRole]?.map(p => p.id) || []
    setPermissions([
      ...permissions,
      { 
        email, 
        role: selectedRole, 
        label: roleLabel, 
        scope: 'Local Tenant Scope', 
        features: defaultPrivileges 
      }
    ])
    setEmail('')
  }

  const handleRevoke = (emailToRevoke) => {
    setPermissions(permissions.filter(p => p.email !== emailToRevoke))
    if (expandedEmail === emailToRevoke) setExpandedEmail(null)
  }

  const toggleFeature = (userEmail, featureId) => {
    setPermissions(permissions.map(u => {
      if (u.email === userEmail) {
        const hasIt = u.features.includes(featureId)
        const newFeatures = hasIt
          ? u.features.filter(fid => fid !== featureId)
          : [...u.features, featureId]
        return { ...u, features: newFeatures }
      }
      return u
    }))
  }

  const visiblePermissions = permissions.filter(p => {
    if (currentRole === 'super') return p.role !== 'super' && p.role !== 'student'
    if (currentRole === 'university') return p.role === 'department' || p.role === 'faculty'
    if (currentRole === 'department') return p.role === 'faculty'
    return false
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Card>
        <SectionHeader title="Role Access Provisioning" subtitle="Grant admin and teaching system roles below your privilege level (students excluded)" />
        {assignableRoles.length === 0 ? (
          <div style={{ fontSize: 13, color: 'var(--text-3)' }}>You do not have administrative privileges to delegate roles.</div>
        ) : (
          <form onSubmit={handleGrant} style={{ display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>User Email Address</label>
              <input 
                type="email" 
                placeholder="user@university.edu"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
              />
            </div>
            <div style={{ width: 200 }}>
              <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Delegated Access Role</label>
              <select
                value={selectedRole}
                onChange={e => setSelectedRole(e.target.value)}
                style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
              >
                {assignableRoles.map(r => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>
            <button type="submit" style={{ padding: '9px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              Grant Access
            </button>
          </form>
        )}
      </Card>

      <Card>
        <SectionHeader title="Delegated Active Accounts" subtitle="Click any row to configure user privileges. Active features can be dynamically toggled." />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Authorized Email</th>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Assigned Role</th>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Purview Scope</th>
                <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visiblePermissions.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ padding: 20, textAlign: 'center', fontSize: 12, color: 'var(--text-3)' }}>No active sub-privilege delegations found.</td>
                </tr>
              ) : (
                visiblePermissions.map((p, i) => {
                  const isExpanded = expandedEmail === p.email
                  const featuresList = rolePrivileges[p.role] || []
                  return (
                    <Fragment key={p.email}>
                      <tr 
                        onClick={() => setExpandedEmail(isExpanded ? null : p.email)}
                        style={{ borderBottom: '1px solid var(--border)', cursor: 'pointer', background: isExpanded ? 'var(--surface-hover)' : 'transparent', transition: 'background 0.15s' }}
                      >
                        <td style={{ padding: 12, fontSize: 12, fontWeight: 600 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            {isExpanded ? <ChevronDown size={14} color="var(--primary)" /> : <ChevronRight size={14} color="var(--text-4)" />}
                            {p.email}
                          </div>
                        </td>
                        <td style={{ padding: 12, fontSize: 12 }}>
                          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--primary)', background: 'var(--primary-muted)', padding: '2px 8px', borderRadius: 6 }}>{p.label}</span>
                        </td>
                        <td style={{ padding: 12, fontSize: 12, color: 'var(--text-3)' }}>{p.scope}</td>
                        <td style={{ padding: 12, textAlign: 'right' }} onClick={e => e.stopPropagation()}>
                          <button 
                            onClick={() => handleRevoke(p.email)}
                            style={{ background: 'none', border: 'none', color: 'var(--danger)', fontSize: 11, fontWeight: 600, cursor: 'pointer', padding: '4px 8px' }}
                          >
                            Revoke
                          </button>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr style={{ background: 'var(--bg-2)' }}>
                          <td colSpan="4" style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Configure Authorized Privileges for {p.email}:</div>
                            {featuresList.length === 0 ? (
                              <div style={{ fontSize: 12, color: 'var(--text-4)' }}>No dynamic privileges configure options defined for this role.</div>
                            ) : (
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px' }}>
                                {featuresList.map(feature => {
                                  const isChecked = p.features.includes(feature.id)
                                  return (
                                    <label key={feature.id} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }} onClick={e => e.stopPropagation()}>
                                      <input 
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => toggleFeature(p.email, feature.id)}
                                        style={{ marginTop: 3, cursor: 'pointer', accentColor: 'var(--primary)' }}
                                      />
                                      <div>
                                        <div style={{ fontSize: 12, fontWeight: 600, color: isChecked ? 'var(--text-1)' : 'var(--text-3)' }}>{feature.label}</div>
                                        <div style={{ fontSize: 10, color: 'var(--text-4)' }}>{feature.desc}</div>
                                      </div>
                                    </label>
                                  )
                                })}
                              </div>
                            )}
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
